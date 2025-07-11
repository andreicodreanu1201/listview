import { supabase } from '@/lib/supabaseClient';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function CoursesScreen() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    const { data, error } = await supabase.from('Cursuri').select('*');

    if (error) {
      console.error('Eroare Supabase:', error.message);
    } else {
      setCourses(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de cursuri</Text>

      {loading ? (
        <Text>Se încarcă...</Text>
      ) : (
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id?.toString() ?? Math.random().toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              {Object.entries(item).map(([key, value]) => (
                <Text key={key} style={styles.field}>
                  {key}: {String(value)}
                </Text>
              ))}
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  field: {
    fontSize: 14,
    marginBottom: 2,
  },
});
